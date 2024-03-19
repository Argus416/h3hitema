terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=3.0.0"
    }
  }
}

provider "azurerm" {
  skip_provider_registration = true # This is only required when the User, Service Principal, or Identity running Terraform lacks the permissions to register Azure Resource Providers.
  features {}
}

resource "azurerm_resource_group" "mohamad" {
  name     = "mohamad-rg"
  location = "West Europe"
}

resource "azurerm_virtual_network" "mohamad" {
  name                = "mohamad-network"
  resource_group_name = azurerm_resource_group.mohamad.name
  location            = azurerm_resource_group.mohamad.location
  address_space       = ["10.0.0.0/16"]
}

resource "azurerm_subnet" "mohamad" {
  name                 = "internal"
  resource_group_name  = azurerm_resource_group.mohamad.name
  virtual_network_name = azurerm_virtual_network.mohamad.name
  address_prefixes     = ["10.0.2.0/24"]
}

resource "azurerm_public_ip" "mohamad" {
  name                = "mohamad-virtual-machine-ip"
  resource_group_name = azurerm_resource_group.mohamad.name
  location            = azurerm_resource_group.mohamad.location
  allocation_method   = "Static"
}


resource "azurerm_network_interface" "mohamad" {
  name                = "test-nic"
  location            = azurerm_resource_group.mohamad.location
  resource_group_name = azurerm_resource_group.mohamad.name

  ip_configuration {
    name                          = "testconfiguration1"
    subnet_id                     = azurerm_subnet.mohamad.id
    private_ip_address_allocation = "Static"
    private_ip_address            = "10.0.2.5"
    public_ip_address_id          = azurerm_public_ip.mohamad.id
  }

  lifecycle {
    create_before_destroy = true
  }
}


resource "azurerm_linux_virtual_machine" "mohamad" {
  name                = "mohamad-vm"
  resource_group_name = azurerm_resource_group.mohamad.name
  location            = azurerm_resource_group.mohamad.location
  size                = "Standard_B1s"
  admin_username      = "ubuntu"
  
  network_interface_ids = [azurerm_network_interface.mohamad.id]

  admin_ssh_key {
    username   = "ubuntu"
    public_key = file("~/.ssh/id_rsa.pub")
  }

  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }

  source_image_reference {
    publisher = "Canonical"
    offer     = "0001-com-ubuntu-server-jammy"
    sku       = "22_04-lts"
    version   = "latest"
  }
  tags = {
    environment = "Démo"
  }
}

resource "azurerm_postgresql_server" "mohamad" {
  name                = "mohamad-psqlserver"
  location            = azurerm_resource_group.mohamad.location
  resource_group_name = azurerm_resource_group.mohamad.name

  administrator_login          = "postgres"
  administrator_login_password = "H@Sh1CoR3!"

  sku_name   = "GP_Gen5_4"
  version    = "11"
  storage_mb = 640000

  public_network_access_enabled    = true
  ssl_enforcement_enabled          = false
  ssl_minimal_tls_version_enforced = "TLSEnforcementDisabled"

  threat_detection_policy{
    enabled = false
  }
}

resource "azurerm_postgresql_firewall_rule" "mohamad" {
  name                = "office"
  resource_group_name = azurerm_resource_group.mohamad.name
  server_name         = azurerm_postgresql_server.mohamad.name
  start_ip_address    = "0.0.0.0"
  end_ip_address      = "255.255.255.255"
}



output "public_ip" {
  value = azurerm_public_ip.mohamad.ip_address
}

output "public_ip_address" {
  value = data.azurerm_public_ip.mohamad.ip_address
}

data "azurerm_public_ip" "mohamad" {
  name                = azurerm_public_ip.mohamad.name
  resource_group_name = azurerm_linux_virtual_machine.mohamad.resource_group_name
}

