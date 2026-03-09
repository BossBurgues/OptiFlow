import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { Client, AppointmentStatus } from '@optiflow/core';

@Component({
  imports: [NxWelcome, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'admin-web';
}

export class AppComponent {
  // Teste de validação
  testeCliente: Client = {
    id: '123',
    fullName: 'João Silva',
    phone: '912345678',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}
