import serial
import io
import time
import os
import sys
import http.server
import socketserver


if __name__ == '__main__':
   
    
    ser = serial.Serial('/dev/ttyACM0', 9600)
    ser.flush()
    f = open("/var/www/html/data.txt", "r+")
    f.truncate()
    f.close
    while True:
        if ser.in_waiting > 0:
            line_s = ser.readline().decode('utf-8').rstrip()
            file = open("/var/www/html/data.txt", "a")
            file.write(line_s)
            file.write("\n")
            print(line_s)
            file.close()

