export namespace ROSJob {
  export interface IJobService {
    compensateOrder(): Promise<void>
  }
}