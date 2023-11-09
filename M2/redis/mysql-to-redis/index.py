import mysql.connector
import redis
import csv

myMysql = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="to-redis"
)
r = redis.StrictRedis(host='localhost', port=6379, decode_responses=True, db=0)
# r.flushall()


def findALlUserDetails():
  mycursor = myMysql.cursor()
  mycursor.execute("SELECT * FROM user_details")
  myresult = mycursor.fetchall()
  return myresult

def userDetailsColumns():
    mycursor = myMysql.cursor()
    mycursor.execute("SHOW COLUMNS FROM user_details")
    myresult = mycursor.fetchall()
    return myresult

def addUserDetailsToRedis(rows):
   for row in rows:
    user_id = row[0]
    username = row[1]
    first_name = row[2]
    last_name = row[3]
    gender = row[4]
    password = row[5]
    status = row[6]
    r.hset('user_details:' + str(user_id), 'username', username)
    r.hset('user_details:' + str(user_id), 'first_name', first_name)
    r.hset('user_details:' + str(user_id), 'last_name', last_name)
    r.hset('user_details:' + str(user_id), 'gender', gender)
    r.hset('user_details:' + str(user_id), 'password', password)
    r.hset('user_details:' + str(user_id), 'status', status)
    
def generateCsv(userDetails, columns):
  f = open('./user_details.csv', 'w', newline='')
  writer = csv.writer(f)

  column_names = [x[0] for x in columns]
  writer.writerow(column_names)

  for row in userDetails:
      writer.writerow(row)
  f.close()


# Mysql to redis
addUserDetailsToRedis(findALlUserDetails())

# Mysql to csv
generateCsv(findALlUserDetails(), userDetailsColumns())

