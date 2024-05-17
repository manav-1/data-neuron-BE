import { IsNotEmpty, IsString } from 'class-validator';

export class InputData {
  @IsNotEmpty()
  @IsString()
  data: string;

  @IsNotEmpty()
  @IsString()
  instanceId: string;
}
