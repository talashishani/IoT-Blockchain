#!/usr/bin/python3

import RPi.GPIO as GPIO
import time
import os
import socket
import sys

GPIO.setmode(GPIO.BCM)
GPIO.setup(17, GPIO.OUT)

while True:
    GPIO.output(17, True)
    time.sleep(1)
    GPIO.output(17, False)
    time.sleep(1) 
