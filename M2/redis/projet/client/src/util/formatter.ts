import { formatDateInFrench } from './Date';

export function loadedDetailsFromater(data: any) {
	return {
		identifiant_station: {
			text: data?.identifiant_station,
			originalText: data?.identifiant_station,
			type: 'text',
		},
		actualisation_de_la_donnee: {
			text: formatDateInFrench(data?.actualisation_de_la_donnee ?? ''),
			originalText: data?.actualisation_de_la_donnee,
			type: 'date',
		},
		borne_de_paiement_disponible: {
			text: data?.borne_de_paiement_disponible,
			originalText: data?.borne_de_paiement_disponible,
			type: 'checkbox',
		},
		capacite_de_la_station: {
			text: data?.capacite_de_la_station,
			originalText: data?.capacite_de_la_station,
			type: 'number',
		},

		nom_communes_equipees: {
			text: data?.nom_communes_equipees,
			originalText: data?.nom_communes_equipees,
			type: 'text',
		},
		nom_station: {
			text: data?.nom_station,
			originalText: data?.nom_station,
			type: 'text',
		},
		nombre_bornettes_libres: {
			text: data?.nombre_bornettes_libres,
			originalText: data?.nombre_bornettes_libres,
			type: 'number',
		},
		nombre_total_velos_disponibles: {
			text: data?.nombre_total_velos_disponibles,
			originalText: data?.nombre_total_velos_disponibles,
			type: 'number',
		},
		retour_velib_possible: {
			text: data?.retour_velib_possible,
			originalText: data?.retour_velib_possible,
			type: 'checkbox',
		},
		station_en_fonctionnement: {
			text: data?.station_en_fonctionnement,
			originalText: data?.station_en_fonctionnement,
			type: 'checkbox',
		},
		velos_electriques_disponibles: {
			text: data?.velos_electriques_disponibles,
			originalText: data?.velos_electriques_disponibles,
			type: 'number',
		},
		velos_mecaniques_disponibles: {
			text: data?.velos_mecaniques_disponibles,
			originalText: data?.velos_mecaniques_disponibles,
			type: 'number',
		},
	};
}
