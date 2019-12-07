export declare const parseSize: (
  /** Input size value */
  value: any,

  /**
   * Surports: 'em', 'ex', '%', 'px', 'cm', 'mm', 'in', 'pt', 'pc',
  'ch','rem','vh','vw','vmin','vmax'
   *
   * @default 'px'
   */
  defaultUnit?: string
) => string | null
