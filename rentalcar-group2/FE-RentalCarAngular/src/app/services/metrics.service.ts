import { Injectable } from '@angular/core';

interface Metric {
  name: string;
  help: string;
  type: 'counter' | 'gauge' | 'histogram';
  value: number;
  labels?: Record<string, string>;
}

@Injectable({
  providedIn: 'root'
})
export class MetricsService {
  private metrics: Map<string, Metric> = new Map();

  constructor() {
    this.registerMetric('frontend_active_users', 'Number of active users', 'gauge');
    this.registerMetric('frontend_page_views_total', 'Total number of page views', 'counter');
    this.registerMetric('frontend_api_response_time_seconds', 'API response time in seconds', 'histogram');
  }

  private registerMetric(name: string, help: string, type: 'counter' | 'gauge' | 'histogram') {
    this.metrics.set(name, { name, help, type, value: 0 });
  }

  incrementCounter(name: string, labels?: Record<string, string>) {
    const metric = this.metrics.get(name);
    if (metric && metric.type === 'counter') {
      metric.value++;
      metric.labels = labels;
    }
  }

  setGauge(name: string, value: number, labels?: Record<string, string>) {
    const metric = this.metrics.get(name);
    if (metric && metric.type === 'gauge') {
      metric.value = value;
      metric.labels = labels;
    }
  }

  observeHistogram(name: string, value: number, labels?: Record<string, string>) {
    const metric = this.metrics.get(name);
    if (metric && metric.type === 'histogram') {
      metric.value = value;
      metric.labels = labels;
    }
  }

  getMetrics(): string {
    let output = '';
    for (const [name, metric] of this.metrics) {
      output += `# HELP ${name} ${metric.help}\n`;
      output += `# TYPE ${name} ${metric.type}\n`;
      const labelString = metric.labels ? `{${Object.entries(metric.labels).map(([k, v]) => `${k}="${v}"`).join(',')}}` : '';
      output += `${name}${labelString} ${metric.value}\n`;
    }
    return output;
  }
}