FROM python:3.10

SHELL ["/bin/bash", "-c"] 

WORKDIR /redis

COPY . .

RUN pip install virtualenv

RUN source Scripts/activate 

RUN pip install -r app/requirements.txt

RUN pip install uvicorn

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
# uvicorn app.main:app --host 0.0.0.0 --port 8000
