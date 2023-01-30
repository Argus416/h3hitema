<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230130125620 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE products ADD slug VARCHAR(255) DEFAULT NULL, ADD image VARCHAR(500) DEFAULT NULL');
        $this->addSql('CREATE INDEX IDX_B3BA5A5A5E237E06989D9B62 ON products (name, slug)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP INDEX IDX_B3BA5A5A5E237E06989D9B62 ON products');
        $this->addSql('ALTER TABLE products DROP slug, DROP image');
    }
}
