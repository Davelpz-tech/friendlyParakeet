# Password Generator Starter Code

In a world of an increasing need for cyber security I set out with a goal and plan to build a random Password Generator using JavaScript. 

### Password generator before
![Alt text](assets\password-gen.PNG)

### Password generator after
![Alt text](assets\password-gen-working.png)

This program allows you to generate a random and secure password after selecting certain preferences such as, if you would like to include Uppercase, Lowercase, Numbers, or Special Symbols in your password.

## Motivation

Making sure you keep your account information safe can be difficult when you need to keep up with modern password security requirements. This program helps cut out the pain of creating a random password everytime.

## Why did I build this?

I'm seeking to help bring attention to making secure passwords which you do not need to assign actual words to. If you use real words in your passwords it's going to be much easier for someone with malicious intentions to guess your password and gain acccess to your accounts. Rather than ever face this problem, I would like to present the world with an easy and quick solution to randomly generate a secure Password that can satisfy all security requirements in the blink of an eye.

## Problems Encountered - and how I fixed them

I enountered a few issues while trying to complete this project such as creating the prompt which would ask you for your prefered password requirements. Initially I used 'confirm' to recieve user inputs but quickly realized I would not be able to easily and efficiently store the user input into variables. Neither would I be able to then set up conditional statements which would generate a password based on the selected Password Requirements. I scrapped this idea and decided to use a validate function which would implement flags to at least make sure my users select at least one check box and set a Password length.
