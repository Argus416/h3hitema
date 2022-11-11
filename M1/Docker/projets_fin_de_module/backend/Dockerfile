FROM python:3.10

SHELL ["/bin/bash", "-c"] 

WORKDIR /fastapi

COPY . .


RUN pip install virtualenv

RUN source Scripts/activate 

RUN pip install -r app/requirements.txt

## Run test
# RUN pytest app/main.py

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000" ]
# python -m uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
