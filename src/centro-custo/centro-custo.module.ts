import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CentroCustoController } from './centro-custo.controller';
import { CentroCusto } from './centro-custo.entity';
import { CentroCustoService } from './centro-custo.service';

@Module({
  imports: [TypeOrmModule.forFeature([CentroCusto])],
  providers: [CentroCustoService],
  controllers: [CentroCustoController],
})
export class CentroCustoModule {}
