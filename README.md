# Yoga Registration Backend

## Problem Statement:

Assume that you are the CTO for the outsourcing firm which has been chosen to build an
admission form for the Yoga Classes which happen every month.
Requirements for the admission form are:

- Only people within the age limit of 18-65 can enroll for the monthly classes and they will be paying the fees on a month on month basis. I.e. an individual will have to pay the fees every month and he can pay it any time of the month.
- They can enroll any day but they will have to pay for the entire month. The monthly fee is
  500/- Rs INR.
- There are a total of 4 batches a day namely 6-7AM, 7-8AM, 8-9AM and 5-6PM. The participants can choose any batch in a month and can move to any other batch next
  month. I.e. participants can shift from one batch to another in different months but in same month they need to be in same batch

## Features

1. User can Register anytime
2. User can only pay for current month
3. User can book a slot
4. User can Pay 500 rs on booking slot.
5. User can only pay after registration.

## Technology Stack:

<img src="https://img.shields.io/badge/python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white"/> <img src="https://img.shields.io/badge/django%20-%23092E20.svg?&style=for-the-badge&logo=django&logoColor=white"/> <img src="https://img.shields.io/badge/markdown-%23000000.svg?&style=for-the-badge&logo=markdown&logoColor=white"/><img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/> <img src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white"/>
<img src="https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray">

- **Frontend**: React
- **Backend**: Django, Django Rest Framework
- **IDE**: VS Code
- **Version Control**: Git and GitHub
- **Database**: SQLite
- **Hosting**: render(not deployed)

### How to Get Started?

#### GitHub Repository Structure

| S.No. | Branch Name                                                         | Purpose                    |
| ----- | ------------------------------------------------------------------- | -------------------------- |
| 1.    | [frontend](https://github.com/ParthSharmaT/yoga_app_api)            | contains all Frontend code |
| 2.    | [backend](https://github.com/ParthSharmaT/yoga_app_api/tree/master) | contains all Backend code  |

## Backend Setup Instructions

### if DOCKER is installed

- Simply open terminal and type:

```
docker-compose up
```

- The backend will be running on your localhost:8000

### Fork, clone locally & create a branch

Fork [Yoga API](https://github.com/ParthSharmaT/yoga_app_api) repository and clone at your local

- Fork and Clone the repo using

```
$ git clone https://github.com/ParthSharmaT/yoga_app_api.git
```

- Change Branch to `master` using

```
$ git checkout master
```

### Setting Environment First Time

#### Basic Requirements

1. [Python](https://www.python.org/downloads/)
1. [pip](https://pip.pypa.io/en/stable/installation/)

#### Creating [Virtual Environment](https://docs.python.org/3/library/venv.html)

A virtual environment is a tool that helps keep dependencies required and the project isolated. If you wish to install a new library and write

```
pip install name_of_library
```

on the terminal without activating an environment, all the packages will be installed globally which is not a good practice if you’re working with different projects on your computer.

If this sounds a bit complicated, don’t worry so much because a virtual environment is just a directory that will contain all the necessary files for our project to run.

**Installing venv (required once)**

**Windows**

```
py -m pip install --user virtualenv
py -m venv env
```

**Linux**

```
python3 -m pip install --user virtualenv
python3 -m venv env
```

You have to start virtual environment everytime you start new terminal -

**Windows**

Using gitbash

```
. env/Scripts/activate
```

Using Powershell

```
. env\Scripts\activate
```

**Linux**

```
source env/bin/activate
```

#### Installing Requirements

**Windows**

```
pip install -r requirements.txt
```

**Linux**

```
pip install -r requirements.txt
```

#### Migrating Database

**Windows**

```
py manage.py migrate
```

**Linux**

```
python3 manage.py migrate
```

#### Create Superuser

**Windows**

```
py manage.py createsupeser
```

**Linux**

```
python3 manage.py createsupeser
```

### Starting Development Server

**Windows**

```
py manage.py runserver
```

**Linux**

```
python3 manage.py runserver
```

### Leaving the virtual environment

```
deactivate
```

### Update requirements file (Critical)

If you have installed new dependency, the pip freeze command lists the third-party packages and versions installed in the environment.

**Windows**

```
pip freeze > requirements.txt
```

**Linux**

```
pip3 freeze > requirements.txt
```

### Update Database

Everytime you change db models, you need to run makemigrations and migrate to update on database.

**Windows**

```
py manage.py makemigrations
py manage.py migrate
```

**Linux**

```
python3 manage.py makemigrations
python3 manage.py migrate
```

# License :memo:

This project follows the [MIT License](https://choosealicense.com/licenses/mit/).

[![Uses Git](https://forthebadge.com/images/badges/uses-git.svg)](https://github.com/ParthSharmaT/yoga_app_api)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://github.com/ParthSharmaT/yoga_app_api)
[![forthebadge](https://forthebadge.com/images/badges/made-with-python.svg)](https://github.com/ParthSharmaT/yoga_app_api)
[![Built with love](https://forthebadge.com/images/badges/built-with-love.svg)](https://github.com/ParthSharmaT/yoga_app_api)
