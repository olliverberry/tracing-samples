import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { Dog } from './dog.entity';

@Controller('api/dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Get()
  async getDogs() {
    return await this.dogsService.getDogs();
  }

  @Get(':id')
  async getDog(@Param('id') id: number) {
    const dog = await this.dogsService.getDog(id);
    if (!dog) throw new NotFoundException();

    return dog;
  }

  @Post()
  async createDog(@Body() dog: Dog) {
    return await this.dogsService.createDog(dog);
  }
}
