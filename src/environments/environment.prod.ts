import { InjectionToken } from "@angular/core";

interface Environment {
  production: boolean;
  apiUrl: string;
}

export const environment: Environment = {
  production: true,
  apiUrl: 'http://localhost:3000'
};

export const ENV_TOKEN = new InjectionToken<Environment>('app.environment.token');