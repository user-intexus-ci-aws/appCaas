import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Emisión Tarjetas', cols: 1, rows: 1,src:"/assets/cass/Icono-Emison.png",content:"Impresión física de tarjetas." },
          { title: 'Análisis', cols: 1, rows: 1,src:"/assets/cass/Icono-Analisis.png",content:"Monitoreo en tiempo real y descarga de reportes."  },
          { title: 'Usuarios', cols: 1, rows: 1,src:"/assets/cass/Icono-Usuarios.png",content:"Crea, visualiza, edita y asigna permisos a usuarios."  },
          { title: 'Configuración', cols: 1, rows: 1,src:"/assets/cass/Icono-Configuracion.png",content:"Emisión y gestion de oficinas y utilidades(templates y notificaciones)." },
          { title: 'Clientes', cols: 1, rows: 1,src:"/assets/cass/Icono-Clientes.png",content:"Gestión y configuración de clientes." },
        ];
      }

      return [
        { title: 'Emisión Tarjetas', cols: 1, rows: 1,src:"/assets/cass/Icono-Emison.png",content:"Impresión física de tarjetas" },
        { title: 'Análisis', cols: 1, rows: 1,src:"/assets/cass/Icono-Analisis.png",content:"Monitoreo en tiempo real y descarga de reportes." },
        { title: 'Usuarios', cols: 1, rows: 1,src:"/assets/cass/Icono-Usuarios.png",content:"Crea, visualiza, edita y asigna permisos a usuarios." },
        { title: 'Configuración', cols: 1, rows: 1,src:"/assets/cass/Icono-Configuracion.png",content:"Emisión y gestion de oficinas y utilidades(templates y notificaciones)." },
        { title: 'Clientes', cols: 1, rows: 1,src:"/assets/cass/Icono-Clientes.png",content:"Gestión y configuración de clientes." }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
