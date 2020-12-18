import { ApiProperty } from '@nestjs/swagger';

export class CreateServicoDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  descricao: string;
  @ApiProperty()
  ano_referencia: number;
  @ApiProperty()
  mes_referencia: number;
  @ApiProperty()
  valor_padrao: number;
}
