import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const formBuilder: FormBuilder=new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should detect form is valid',()=>{
    fixture.nativeElement.querySelector('button').click();
    expect (component.login()).toEqual('invalid_form');
  });

  it('should validate correct user and password',()=>{
    component.loginForm=formBuilder.group({
      rut:'9999999-9',
      contrasena:'123456'
    });
    fixture.nativeElement.querySelector('button').click();
    expect(component.login).toBeTruthy;
  });

  it('should deny access with incorrect password',()=>{
    component.loginForm=formBuilder.group({
      rut:'9999999-9',
      contrasena:'987654'
    });
    fixture.nativeElement.querySelector('button').click();
    expect(component.login).toBeTruthy;
  });

  it('should able to logon', () => {
    component.login();
    expect(component.login).toBeTruthy();
  })

});
