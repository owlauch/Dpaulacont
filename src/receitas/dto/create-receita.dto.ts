import { ApiProperty } from '@nestjs/swagger';
import { Pessoas } from 'src/pessoas/pessoas.entity';
import { Servicos } from 'src/servicos/servicos.entity';

export class CreateReceitaDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  fonte: number;
  @ApiProperty()
  valor: number;
  @ApiProperty()
  clienteId: number;
  @ApiProperty()
  servicoId: number;
}
