import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, Index } from 'typeorm';

// Core Patient Tracking Entity
@Entity('patient_tracking_sessions')
@Index(['patientId', 'status', 'priority'])
@Index(['startDate', 'endDate'])
export class PatientTrackingSession {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 255 })
  @Index()
  patientId: string;

  @Column('varchar', { length: 100 })
  sessionType: string; // admission, observation, outpatient, emergency, icu, surgical

  @Column('varchar', { length: 50 })
  @Index()
  status: string; // active, paused, completed, discharged, transferred

  @Column('varchar', { length: 50 })
  @Index()
  priority: string; // critical, high, medium, low, routine

  @Column('varchar', { length: 100 })
  assignedUnit: string; // ICU, Emergency, Ward A, etc.

  @Column('varchar', { length: 100, nullable: true })
  assignedRoom: string;

  @Column('varchar', { length: 100, nullable: true })
  assignedBed: string;

  @Column('varchar', { length: 255 })
  primaryPhysician: string;

  @Column('varchar', { length: 255, nullable: true })
  attendingNurse: string;

  @Column('simple-array', { nullable: true })
  careTeam: string[]; // Array of care team member IDs

  @Column('text', { nullable: true })
  chiefComplaint: string;

  @Column('text', { nullable: true })
  admissionNotes: string;

  @Column('text', { nullable: true })
  currentTreatmentPlan: string;

  @Column('timestamp')
  @Index()
  startDate: Date;

  @Column('timestamp', { nullable: true })
  estimatedEndDate: Date;

  @Column('timestamp', { nullable: true })
  actualEndDate: Date;

  @Column('simple-json', { nullable: true })
  trackingParameters: {
    vitalSignsFrequency: number; // minutes
    labOrderFrequency: number; // hours
    assessmentFrequency: number; // hours
    medicationSchedule: string[];
    specialInstructions: string[];
    dietaryRestrictions: string[];
    activityRestrictions: string[];
  };

  @OneToMany(() => PatientTrackingEvent, event => event.session)
  events: PatientTrackingEvent[];

  @OneToMany(() => PatientTrackingAlert, alert => alert.session)
  alerts: PatientTrackingAlert[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column('varchar', { length: 255 })
  createdBy: string;

  @Column('varchar', { length: 255 })
  lastUpdatedBy: string;
}

// Patient Tracking Events
@Entity('patient_tracking_events')
@Index(['sessionId', 'eventType', 'timestamp'])
@Index(['timestamp', 'severity'])
export class PatientTrackingEvent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 255 })
  @Index()
  sessionId: string;

  @ManyToOne(() => PatientTrackingSession, session => session.events)
  session: PatientTrackingSession;

  @Column('varchar', { length: 100 })
  @Index()
  eventType: string; // vital_signs, medication, assessment, procedure, lab_order, transfer, alert

  @Column('varchar', { length: 50 })
  @Index()
  severity: string; // critical, high, medium, low, info

  @Column('varchar', { length: 255 })
  title: string;

  @Column('text')
  description: string;

  @Column('simple-json', { nullable: true })
  eventData: {
    vitalSigns?: {
      heartRate?: number;
      bloodPressure?: { systolic: number; diastolic: number };
      temperature?: number;
      respiratoryRate?: number;
      oxygenSaturation?: number;
      painLevel?: number;
      consciousness?: string;
    };
    medication?: {
      name: string;
      dosage: string;
      route: string;
      administeredBy: string;
      scheduledTime: string;
      actualTime: string;
    };
    assessment?: {
      assessmentType: string;
      findings: string;
      recommendations: string;
      followUpRequired: boolean;
    };
    procedure?: {
      procedureName: string;
      performedBy: string;
      duration: number;
      outcome: string;
      complications?: string;
    };
    labOrder?: {
      tests: string[];
      priority: string;
      expectedResults: string;
      orderedBy: string;
    };
  };

  @Column('timestamp')
  @Index()
  timestamp: Date;

  @Column('varchar', { length: 255 })
  recordedBy: string;

  @Column('varchar', { length: 100, nullable: true })
  location: string;

  @Column('boolean', { default: false })
  requiresFollowUp: boolean;

  @Column('timestamp', { nullable: true })
  followUpDue: Date;

  @Column('varchar', { length: 50, default: 'pending' })
  status: string; // pending, completed, cancelled, overdue

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

// Patient Tracking Alerts
@Entity('patient_tracking_alerts')
@Index(['sessionId', 'alertType', 'severity'])
@Index(['isActive', 'priority', 'createdAt'])
export class PatientTrackingAlert {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 255 })
  @Index()
  sessionId: string;

  @ManyToOne(() => PatientTrackingSession, session => session.alerts)
  session: PatientTrackingSession;

  @Column('varchar', { length: 100 })
  @Index()
  alertType: string; // vital_threshold, medication_due, assessment_overdue, lab_critical, deterioration

  @Column('varchar', { length: 50 })
  @Index()
  severity: string; // critical, high, medium, low

  @Column('varchar', { length: 50 })
  @Index()
  priority: string; // immediate, urgent, routine

  @Column('varchar', { length: 255 })
  title: string;

  @Column('text')
  message: string;

  @Column('simple-json', { nullable: true })
  alertData: {
    thresholdBreached?: {
      parameter: string;
      currentValue: number;
      thresholdValue: number;
      direction: 'above' | 'below';
    };
    medicationDue?: {
      medicationName: string;
      scheduledTime: string;
      overdueDuration: number;
    };
    assessmentOverdue?: {
      assessmentType: string;
      lastPerformed: string;
      overdueDuration: number;
    };
    labCritical?: {
      testName: string;
      result: string;
      criticalRange: string;
    };
  };

  @Column('boolean', { default: true })
  @Index()
  isActive: boolean;

  @Column('boolean', { default: false })
  isAcknowledged: boolean;

  @Column('varchar', { length: 255, nullable: true })
  acknowledgedBy: string;

  @Column('timestamp', { nullable: true })
  acknowledgedAt: Date;

  @Column('text', { nullable: true })
  acknowledgmentNotes: string;

  @Column('boolean', { default: false })
  isResolved: boolean;

  @Column('varchar', { length: 255, nullable: true })
  resolvedBy: string;

  @Column('timestamp', { nullable: true })
  resolvedAt: Date;

  @Column('text', { nullable: true })
  resolutionNotes: string;

  @Column('timestamp', { nullable: true })
  escalatedAt: Date;

  @Column('varchar', { length: 255, nullable: true })
  escalatedTo: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

// Care Plan Tracking
@Entity('patient_care_plans')
@Index(['sessionId', 'status'])
export class PatientCarePlan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 255 })
  @Index()
  sessionId: string;

  @ManyToOne(() => PatientTrackingSession)
  session: PatientTrackingSession;

  @Column('varchar', { length: 255 })
  planTitle: string;

  @Column('text')
  planDescription: string;

  @Column('simple-json')
  goals: {
    id: string;
    description: string;
    targetDate: string;
    priority: string;
    status: string; // not_started, in_progress, completed, deferred
    measurableOutcome: string;
  }[];

  @Column('simple-json')
  interventions: {
    id: string;
    description: string;
    frequency: string;
    assignedTo: string;
    status: string;
    lastPerformed?: string;
    nextDue?: string;
  }[];

  @Column('simple-json', { nullable: true })
  progressNotes: {
    id: string;
    date: string;
    note: string;
    recordedBy: string;
    category: string; // improvement, decline, stable, concern
  }[];

  @Column('varchar', { length: 50 })
  status: string; // active, completed, discontinued, on_hold

  @Column('timestamp')
  startDate: Date;

  @Column('timestamp', { nullable: true })
  endDate: Date;

  @Column('varchar', { length: 255 })
  createdBy: string;

  @Column('varchar', { length: 255 })
  lastReviewedBy: string;

  @Column('timestamp', { nullable: true })
  lastReviewedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

// Quality Metrics and Outcomes
@Entity('patient_tracking_metrics')
@Index(['sessionId', 'metricType', 'timestamp'])
export class PatientTrackingMetric {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 255 })
  @Index()
  sessionId: string;

  @ManyToOne(() => PatientTrackingSession)
  session: PatientTrackingSession;

  @Column('varchar', { length: 100 })
  @Index()
  metricType: string; // length_of_stay, readmission_risk, satisfaction_score, outcome_measure

  @Column('varchar', { length: 255 })
  metricName: string;

  @Column('decimal', { precision: 10, scale: 2 })
  value: number;

  @Column('varchar', { length: 50, nullable: true })
  unit: string;

  @Column('varchar', { length: 100, nullable: true })
  benchmark: string;

  @Column('simple-json', { nullable: true })
  metadata: {
    calculationMethod?: string;
    dataSource?: string;
    qualityIndicator?: boolean;
    riskFactor?: string;
    improvementTarget?: number;
  };

  @Column('timestamp')
  @Index()
  timestamp: Date;

  @Column('varchar', { length: 255 })
  recordedBy: string;

  @CreateDateColumn()
  createdAt: Date;
}

// Resource Utilization Tracking
@Entity('patient_resource_utilization')
@Index(['sessionId', 'resourceType', 'timestamp'])
export class PatientResourceUtilization {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 255 })
  @Index()
  sessionId: string;

  @ManyToOne(() => PatientTrackingSession)
  session: PatientTrackingSession;

  @Column('varchar', { length: 100 })
  @Index()
  resourceType: string; // nursing_hours, physician_time, equipment_usage, medication_cost, lab_tests

  @Column('varchar', { length: 255 })
  resourceName: string;

  @Column('decimal', { precision: 10, scale: 2 })
  quantity: number;

  @Column('varchar', { length: 50 })
  unit: string; // hours, minutes, count, dollars

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  costPerUnit: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  totalCost: number;

  @Column('varchar', { length: 255, nullable: true })
  assignedProvider: string;

  @Column('varchar', { length: 100, nullable: true })
  department: string;

  @Column('timestamp')
  @Index()
  timestamp: Date;

  @Column('varchar', { length: 255 })
  recordedBy: string;

  @CreateDateColumn()
  createdAt: Date;
}
