import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication-service';

@Component({
  selector: 'app-create-session',
  imports: [],
  templateUrl: './create-session.html',
  styleUrl: './create-session.css',
})
export class CreateSession implements OnInit {
  loading = true;

constructor(private route: ActivatedRoute, private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const requestToken = params['approved'];
      localStorage.setItem('request_token', params['request_token']);
      console.log('Request Token Approved:', requestToken);

      if (requestToken === 'true') {
        
      } else {
        this.loading = false;
      }
    });
  }
}
