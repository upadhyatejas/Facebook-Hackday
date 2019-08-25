import os
import sh
import time
import threading

def invokenpm():
    os.system("sudo npm start")
def invokeBrowser():
    os.system("google-chrome http://localhost:8081/index.html")

t1 = threading.Thread(target=invokenpm, args=())
#t2 = threading.Thread(target=invokeBrowser, args=())
#t2.start()
enter_view = input("view number")
if(enter_view == 1 ):
    sh.cd('/home/upadhyatejas/Hackday/Index')
    print(sh.pwd())
    t1 = threading.Thread(target=invokenpm, args=())
    t1.start()
elif (enter_view == 2):
    sh.cd('/home/upadhyatejas/Hackday/Lesson-Information')
    print(sh.pwd())
    t1 = threading.Thread(target=invokenpm, args=())
    t1.start()
else:
    sh.cd('/home/upadhyatejas/Hackday/Quiz')
    t1 = threading.Thread(target=invokenpm, args=())
    t1.start()
print("done with excecution")