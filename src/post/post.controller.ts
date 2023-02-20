import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostController {
    @Get()
    ListPosts(){
        return "POSTSSSS"
    }

}
