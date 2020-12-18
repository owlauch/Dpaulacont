import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PessoasService } from 'src/pessoas/pessoas.service';
import { ServicosService } from 'src/servicos/servicos.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { Receita } from './receitas.entity';
import { ReceitasService } from './receitas.service';

@Controller('receitas')
@ApiTags('Receitas')
export class ReceitasController {
  constructor(
    private readonly receitaService: ReceitasService,
    private readonly clienteService: PessoasService,
    private readonly servicoService: ServicosService,
  ) {}

  @Post()
  async create(@Body() createReceita: CreateReceitaDto): Promise<Receita> {
    let receita = new Receita();
    receita.data_pgto = new Date();
    receita.cliente = await this.clienteService.findOne(
      createReceita.clienteId.toString(),
    );
    receita.servico = await this.servicoService.findOne(
      createReceita.servicoId.toString(),
    );
    receita.fonte = createReceita.fonte;
    receita.valor = createReceita.valor;
    return this.receitaService.create(receita);
  }

  @Get()
  findAll(): Promise<Receita[]> {
    return this.receitaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Receita> {
    return this.receitaService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.receitaService.remove(id);
  }
}
