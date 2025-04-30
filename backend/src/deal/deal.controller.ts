import { Controller, Post, Body, Query, Put, Param, Get, Delete } from '@nestjs/common';

import { DealService } from './deal.service';
import { Deal, EnrollDto, UpdateDto } from './dto/deal.dto';
import { ROLE_NAMES } from 'lib/constants';
import { Role } from 'lib/auth/decorators/role.decorator';

@Controller('/deals')
@Role(ROLE_NAMES.MERCHANT)
export class DealController {
  constructor(private readonly dealService: DealService) {}

  @Get('/')
  getDeals() {
    return this.dealService.getAll();
  }

  @Get('/:id')
  getDeal(@Param('id') id: string) {
    return this.dealService.getById(id);
  }

  @Post('/create')
  createDeal(@Body() deal: Deal) {
    return this.dealService.create(deal);
  }

  @Put('/update')
  updateDeal(@Query() { id }, @Body() deal: UpdateDto) {
    return this.dealService.update(id, deal);
  }

  @Delete('/delete/:id')
  deleteDeal(@Param('id') id: string) {
    return this.dealService.delete(id);
  }

  @Post('/enroll')
  async enrollDeal(@Body() enrollDto: EnrollDto) {
    return this.dealService.enrollDeal(enrollDto);
  }
}
