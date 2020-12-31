const { response } = require('express');
const Entry = require('../models/Entry');

const getData = async(req, res = response) => {

	const {CompanyId, UserId, intervalo_activo, fecha_inicio, fecha_fin} = req.body;

	var sessions_by_month = [0,0,0,0,0,0,0,0,0,0,0,0];

	try {
		
		for (let i = 0; i < 5; i++) {
			const entries = await Entry.find({CompanyId: i});
			var sessions = 0
			var month = -1
			for (let j = 0; j < entries.length - 1 ; j++){
				if (entries[j].UserId === entries[j+1].UserId) {
					const diff = new Date(entries[j+1].Fecha).getTime() - new Date(entries[j].Fecha).getTime();
					if (diff <= intervalo_activo) {
						sessions = sessions + 2;
					} else {
						sessions = sessions + 1;
					}
					month = new Date(entries[j].Fecha).getMonth()
				}
			}
			sessions_by_month[month] += sessions;
		}
	
		res.json({
			ok: true,
			msg: 'data para gráficos',
			sessions_by_month
		});

	} catch (error) {
		console.log('Ocurrió el siguiente error', error);
	}
}

module.exports = {
	getData
}