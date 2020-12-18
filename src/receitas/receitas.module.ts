import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receita } from './receitas.entity';
import { ReceitasController } from './receitas.controller';
import { ReceitasService } from './receitas.service';
import { PessoasService } from 'src/pessoas/pessoas.service';
import { ServicosService } from 'src/servicos/servicos.service';
import { PessoasModule } from 'src/pessoas/pessoas.module';
import { ServicosModule } from 'src/servicos/servicos.module';

@Module({
  imports: [TypeOrmModule.forFeature([Receita]), PessoasModule, ServicosModule],
  providers: [ReceitasService],
  controllers: [ReceitasController],
})
export class ReceitasModule {}
