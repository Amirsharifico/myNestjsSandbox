import { Controller, Get, Post, Body, ParseIntPipe } from '@nestjs/common';
import { Param, Query } from '@nestjs/common/decorators';

@Controller('posts')
export class PostController {
    @Get()
    listPosts(){
        return "POSTSSSS"
    }

    @Post()
    createPost(@Body() body:any, @Query() query:string){
        console.log(body, query);

    }

    @Get("/:id")
    getPost(@Param("id", ParseIntPipe) id:number ){
        console.log(id)

    }

}
