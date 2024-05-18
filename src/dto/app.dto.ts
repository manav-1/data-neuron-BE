import { IsNotEmpty, IsString } from 'class-validator';

/**
 * Represents the input data for an application.
 */
export class InputData {
  /**
   * The data string.
   */
  @IsNotEmpty()
  @IsString()
  data: string;

  /**
   * The instance ID string.
   */
  @IsNotEmpty()
  @IsString()
  instanceId: string;
}
