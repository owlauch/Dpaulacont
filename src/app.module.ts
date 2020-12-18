import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CentroCustoModule } from './centro-custo/centro-custo.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { ReceitasModule } from './receitas/receitas.module';
import { ServicosModule } from './servicos/servicos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'FIREwall1',
      database: 'dpaulacont',
      synchronize: true,
      autoLoadEntities: true,
    }),
    CentroCustoModule,
    PessoasModule,
    ServicosModule,
    ReceitasModule,
  ],
  providers: [],
})
export class AppModule {}
