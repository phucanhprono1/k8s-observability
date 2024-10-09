import { Component, OnInit } from '@angular/core';
import { MetricsService } from '../../services/metrics.service';

@Component({
  selector: 'app-metrics-demo',
  template: `
    <div class="metrics-demo">
      <h2>Metrics Demo</h2>
      <p>Active Users: {{ activeUsers }}</p>
      <p>Page Views: {{ pageViews }}</p>
      <button (click)="incrementPageViews()">Increment Page Views</button>
      <button (click)="simulateApiCall()">Simulate API Call</button>
      <h3>Current Metrics:</h3>
      <pre>{{ currentMetrics }}</pre>
    </div>
  `,
  styles: [`
    .metrics-demo {
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    button {
      margin-right: 10px;
    }
    pre {
      background-color: #f4f4f4;
      padding: 10px;
      border-radius: 5px;
    }
  `]
})
export class MetricsDemoComponent implements OnInit {
  activeUsers = 0;
  pageViews = 0;
  currentMetrics = '';

  constructor(private metricsService: MetricsService) {}

  ngOnInit() {
    this.incrementPageViews();
    this.updateActiveUsers();
    this.updateMetrics();
  }

  incrementPageViews() {
    this.pageViews++;
    this.metricsService.incrementCounter('frontend_page_views_total', { page: 'MetricsDemoComponent' });
    this.updateMetrics();
  }

  updateActiveUsers() {
    this.activeUsers = Math.floor(Math.random() * 100) + 1;
    this.metricsService.setGauge('frontend_active_users', this.activeUsers, { page: 'MetricsDemoComponent' });
    this.updateMetrics();
  }

  simulateApiCall() {
    const duration = Math.random() * 2;
    this.metricsService.observeHistogram('frontend_api_response_time_seconds', duration, { endpoint: '/api/demo' });
    console.log(`API call simulated with duration: ${duration} seconds`);
    this.updateMetrics();
  }

  updateMetrics() {
    this.currentMetrics = this.metricsService.getMetrics();
  }
}