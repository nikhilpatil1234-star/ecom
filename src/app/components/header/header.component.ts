import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup;
  searchInput: FormControl | undefined;
  recentSearchTerm: string = ''; // Initialize with an empty string
  constructor(private fb: FormBuilder) {
    this.searchInput = new FormControl('');
    this.searchForm = this.fb.group({
      searchTerm: this.searchInput,
    });

    // this.searchInput.valueChanges.subscribe((searchTerm) => {
    //   console.log('searchTerm', searchTerm);
    //   this.recentSearchTerm = searchTerm;
    // });
  }
  ngOnInit(): void {
    console.log('local', localStorage.getItem('seller'));
  }
  search() {
    this.recentSearchTerm = this.searchInput?.value;
    console.log('this.searchInput', this.searchInput?.value);
  }
  logOut() {
    localStorage.removeItem('seller');
  }
}
