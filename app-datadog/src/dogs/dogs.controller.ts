import { Controller, Get } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('api/dogs')
export class DogsController {
    constructor(
        private dogsService: DogsService
    ) {}

    @Get()
    async getDogs() {
        return await this.dogsService.getDogs();
    }
}
