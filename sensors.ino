#include "DHT.h"
#define DHTPIN 5 
#define DHTTYPE DHT11
#define USE_ARDUINO_INTERRUPTS true   
#include <PulseSensorPlayground.h>   
const int PulseWire = A5;  
int Threshold = 550;    
PulseSensorPlayground pulseSensor; 
const int trackingPin = 8; 
const int ledPin = 4; 
const int pingPin = 3;
const int echoPin = 2; 
const int ldr = 9;
long microsecondsToInches(long microseconds) {
   return microseconds/74/2;
}

long microsecondsToCentimeters(long microseconds) {
   return microseconds/29/2;
}
DHT dht(DHTPIN, DHTTYPE);
void setup() {
  Serial.begin(9600);
  dht.begin();
  pinMode(pingPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(ldr, INPUT);
  pulseSensor.analogInput(PulseWire);   
  pulseSensor.setThreshold(Threshold);   
  pulseSensor.begin();
  pinMode(trackingPin, INPUT); 
  pinMode(ledPin, OUTPUT); 
}
void loop() {
  float humi  = dht.readHumidity();
  float tempC = dht.readTemperature();
  if (isnan(humi) || isnan(tempC)) {
    Serial.println("Failed to read from DHT sensor!");
  } else {
    Serial.print("Humidity: ");
    Serial.print(humi);
    Serial.print("%");
    Serial.print(","); 
    Serial.print("Temperature: ");
    Serial.print(tempC);
    Serial.print("°C");
  }
  
  Serial.print("|");
  int myBPM = pulseSensor.getBeatsPerMinute();  
  if (pulseSensor.sawStartOfBeat()) {           
  Serial.print("HeartBeat --> "); 
  Serial.print("BPM: ");                        
  Serial.print(myBPM);                  
  }
  
  Serial.print("|");
  boolean val = digitalRead(trackingPin);
  if(val == HIGH) 
  { 
    digitalWrite(ledPin, LOW); 
    Serial.print("Detect: Black!");
  }
  else
  {
    digitalWrite(ledPin, HIGH); 
    Serial.print("Detect: White!");
  }
  Serial.print("|");
  int ldr_val = digitalRead(ldr);
  if (ldr_val == 1){
    Serial.print("Present");
    }
    else {
      Serial.print("Absent");
      }
  
   Serial.print("|");
   long duration, inches, cm;
   digitalWrite(pingPin, LOW);
   delayMicroseconds(2);
   digitalWrite(pingPin, HIGH);
   delayMicroseconds(10);
   digitalWrite(pingPin, LOW);
   duration = pulseIn(echoPin, HIGH);
   inches = microsecondsToInches(duration);
   cm = microsecondsToCentimeters(duration);
   Serial.print(inches);
   Serial.print("in, ");
   Serial.print(cm);
   Serial.print("cm");
 
  Serial.println();
  delay(10000);
}
