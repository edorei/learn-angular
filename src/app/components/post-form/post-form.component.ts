import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatePost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title: string, body: string) {
    if(!title || !body) {
      alert("Fields should not be empty");
      return;
    } else {
      this.postService.addPost({ title, body } as Post).subscribe(posts => {
        this.newPost.emit(posts);
      });
    }
  }

  editPost() {
    this.postService.updatePost(this.currentPost).subscribe(post => {
      console.log(post);
      this.isEdit = false;
      this.currentPost = {
        id: 0,
        title: '',
        body: ''
      }
      this.updatePost.emit(post);
    });

    
  }
}
