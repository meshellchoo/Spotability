# Spotability

> Authors: [Xin Wang](https://github.com/xinwng) [Michelle Chu](https://github.com/meshellchoo) [Yuteng Wu](https://github.com/YTTWu) [Jeng-Rung Tu](https://github.com/JengRung)

<a name="project-setup"></a>
# Project Setup
1. Clone this repo 
    ```sh
     git clone https://github.com/meshellchoo/HACKBU2022.git
    ``` 

<a name="django-setup"></a>
## Django Setup
1. cd into the project directory
```sh 
cd HACKBU2022/ 
``` 
2. create a virtual environment
```sh
python -m venv env
```
3a. For Linux, activate the virtual environment<br />
```sh
source env/bin/activate
```
3b. For Linux, activate the virtual environment<br />
```sh
env\Scripts\activate.bat
```
4. install all the dependencies 
```sh
pip3 install -r requirements.txt
```
5. cd into the admin folder
```sh
cd admin/
```
6. run the server
```sh
python manage.py runserver
```



<a name="react-setup"></a>
## React Setup (React must be running on another terminal)
1. cd into the React folder on a separate terminal
```sh 
cd react-app/ 
``` 
2. install required dependencies. Your terminal should tell you which dependencies you're missing. Simply install the missing ones.
```sh
npm install
```
3. activate the react server
```sh
npm start
```
