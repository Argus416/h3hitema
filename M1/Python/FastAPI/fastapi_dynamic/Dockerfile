FROM python:3.10

SHELL ["/bin/bash", "-c"] 

WORKDIR /fastapi

COPY . .


RUN pip install virtualenv

RUN source Scripts/activate 

# Méthode 1
# RUN pip freeze > requirements.txt

# Méthode 2
RUN pip install pipreqs
RUN pipreqs --force app/

RUN pip install -r app/requirements.txt
# these libraries weren't detetected neither by pip freeze nor pipreqs
RUN pip install uvicorn
RUN pip install sqlalchemy
RUN pip install psycopg2
RUN pip install pytest

## Run test
# RUN pytest app/main.py

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000" ]
# python -m uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
