import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError } from 'rxjs/operators';

import { isNullOrUndefined } from 'util';

import { EnvService } from '../env.service';

import { InvSupervisor } from '../../models/configuration/InvSupervisor';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private http: HttpClient,
    private env: EnvService
  ) {
    const temp = '/InvMenus/selectionMenu';
  }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });


  demo =  {
  "client": [
    {
      "hca_queue_client_id": "5",
      "hca_queue_client_name": "Ubiipagos"
    }
  ],
  "queue": [
    {
      "hca_queue_queue_id": "15",
      "hca_queue_queue_name": "GRUPO UBIPAGO"
    }
  ],
  "service": [
    {
      "hca_queue_service_id": null,
      "hca_queue_service_name": null
    }
  ],
  "campaign": [],
  "supervisor": [
    {
      "hca_agent_supervisor_id": "12",
      "hca_agent_supervisor_name": "Jesus Velasquez"
    },
    {
      "hca_agent_supervisor_id": "0",
      "hca_agent_supervisor_name": "Joselyn Avila"
    },
    {
      "hca_agent_supervisor_id": "0",
      "hca_agent_supervisor_name": ""
    }
  ],
  "agent": [
    {
      "hca_agent_agent_id": "152",
      "hca_agent_agent_name": "Jean Vergara "
    },
    {
      "hca_agent_agent_id": "153",
      "hca_agent_agent_name": "Maria Manjarres"
    },
    {
      "hca_agent_agent_id": "154",
      "hca_agent_agent_name": "Mariangela Martinho"
    },
    {
      "hca_agent_agent_id": "155",
      "hca_agent_agent_name": "Edward Lopez"
    },
    {
      "hca_agent_agent_id": "158",
      "hca_agent_agent_name": "Kevin Barrios"
    },
    {
      "hca_agent_agent_id": "159",
      "hca_agent_agent_name": "Williams Nunez"
    },
    {
      "hca_agent_agent_id": "160",
      "hca_agent_agent_name": "Betsimar Montilla"
    },
    {
      "hca_agent_agent_id": "162",
      "hca_agent_agent_name": "Peter Aparicio "
    },
    {
      "hca_agent_agent_id": "163",
      "hca_agent_agent_name": "Keimilys Colina"
    },
    {
      "hca_agent_agent_id": "164",
      "hca_agent_agent_name": "Pedro Pineda"
    },
    {
      "hca_agent_agent_id": "165",
      "hca_agent_agent_name": "Richard Gonzalez"
    },
    {
      "hca_agent_agent_id": "167",
      "hca_agent_agent_name": "Yorsi Camargo "
    },
    {
      "hca_agent_agent_id": "169",
      "hca_agent_agent_name": "Osner Poveda"
    },
    {
      "hca_agent_agent_id": "170",
      "hca_agent_agent_name": "Randy Cristobal"
    },
    {
      "hca_agent_agent_id": "173",
      "hca_agent_agent_name": "Neidy Liscano  "
    },
    {
      "hca_agent_agent_id": "174",
      "hca_agent_agent_name": "Angie Alvarado"
    },
    {
      "hca_agent_agent_id": "175",
      "hca_agent_agent_name": "Robinson Cupersito "
    },
    {
      "hca_agent_agent_id": "176",
      "hca_agent_agent_name": "Lorena  Morales "
    },
    {
      "hca_agent_agent_id": "187",
      "hca_agent_agent_name": "Darnel Carriedo"
    },
    {
      "hca_agent_agent_id": "219",
      "hca_agent_agent_name": "Ricardo Ordoñez"
    },
    {
      "hca_agent_agent_id": "221",
      "hca_agent_agent_name": "Cristina  Paredes "
    },
    {
      "hca_agent_agent_id": "223",
      "hca_agent_agent_name": "Aurelis Briceño "
    },
    {
      "hca_agent_agent_id": "224",
      "hca_agent_agent_name": "Verona  Pineda"
    },
    {
      "hca_agent_agent_id": "226",
      "hca_agent_agent_name": "Oriana Bericoto"
    },
    {
      "hca_agent_agent_id": "227",
      "hca_agent_agent_name": "Angel Zambrano "
    },
    {
      "hca_agent_agent_id": "228",
      "hca_agent_agent_name": "Marielsy  Diaz "
    },
    {
      "hca_agent_agent_id": "230",
      "hca_agent_agent_name": "Yulgelys Mercado"
    },
    {
      "hca_agent_agent_id": "231",
      "hca_agent_agent_name": "Madeleine  Sanchez "
    },
    {
      "hca_agent_agent_id": "232",
      "hca_agent_agent_name": "Paola Farias"
    },
    {
      "hca_agent_agent_id": "233",
      "hca_agent_agent_name": "Daniela Colmenares"
    },
    {
      "hca_agent_agent_id": "235",
      "hca_agent_agent_name": "Hector Toro "
    },
    {
      "hca_agent_agent_id": "236",
      "hca_agent_agent_name": "Francisco Ayala"
    },
    {
      "hca_agent_agent_id": "238",
      "hca_agent_agent_name": "Sup Josbelin Taberoa"
    },
    {
      "hca_agent_agent_id": "241",
      "hca_agent_agent_name": "Boris Anchila "
    },
    {
      "hca_agent_agent_id": "247",
      "hca_agent_agent_name": "Paola Monsalve"
    },
    {
      "hca_agent_agent_id": "251",
      "hca_agent_agent_name": "Dios Castaño"
    },
    {
      "hca_agent_agent_id": "252",
      "hca_agent_agent_name": "Anyela Castillo"
    },
    {
      "hca_agent_agent_id": "259",
      "hca_agent_agent_name": "Estefany Gonzalez"
    },
    {
      "hca_agent_agent_id": "260",
      "hca_agent_agent_name": "Alaim Yanez"
    },
    {
      "hca_agent_agent_id": "261",
      "hca_agent_agent_name": "Andrea Baptista"
    },
    {
      "hca_agent_agent_id": "150",
      "hca_agent_agent_name": "Melvin Alvarez"
    },
    {
      "hca_agent_agent_id": "151",
      "hca_agent_agent_name": "Oilybith Aponte "
    },
    {
      "hca_agent_agent_id": "166",
      "hca_agent_agent_name": "Cristhian Cabrejos"
    },
    {
      "hca_agent_agent_id": "177",
      "hca_agent_agent_name": "Benny Flores"
    },
    {
      "hca_agent_agent_id": "203",
      "hca_agent_agent_name": "Enrique Zerpa"
    },
    {
      "hca_agent_agent_id": "220",
      "hca_agent_agent_name": "Jose Castellanos"
    },
    {
      "hca_agent_agent_id": "222",
      "hca_agent_agent_name": "Carlos Monsalve "
    }
  ],
  "schedule": [
    {
      "hca_agent_schedule_id": "3",
      "hca_agent_schedule_name": "Diurno Ubiipagos"
    },
    {
      "hca_agent_schedule_id": null,
      "hca_agent_schedule_name": "Mixto Ubiipagos"
    },
    {
      "hca_agent_schedule_id": "4",
      "hca_agent_schedule_name": "Mixto Ubiipagos"
    },
    {
      "hca_agent_schedule_id": null,
      "hca_agent_schedule_name": ""
    },
    {
      "hca_agent_schedule_id": null,
      "hca_agent_schedule_name": "Diurno Ubiipagos"
    }
  ],
  "auxiliar": [
    {
      "inv_break_id": 4,
      "inv_break_name": "Reunion"
    },
    {
      "inv_break_id": 2,
      "inv_break_name": "BaÃ±o"
    },
    {
      "inv_break_id": 3,
      "inv_break_name": "Descanso"
    }
  ],
  "asignation": [
    {
      "inv_break_id": 6,
      "inv_break_name": "Llamada saliente"
    }
  ]
}


  getMenuOptionRecords(queryDates) {
    const query = {
        "start_date": "'2019-01-25'",
        "end_date": "'2019-01-26'"
        }

    queryDates = JSON.stringify(query);

    const accessToken = localStorage.getItem('accessToken');
    const url_api = `${this.env.loopbackApiUrl}/api/InvMenus/selectionMenu access_token=${accessToken}`;
    // const url_api = `${this.env.loopbackApiUrl}/api/InvMenus/selectionMenu access_token=${accessToken}`;
    console.log('getAllRecords', url_api);

    // return this.http.post<InvSupervisor>(url_api, queryDates, {headers: this.headers})
    // .pipe(map(data => data));

    return this.demo;
  }




}
