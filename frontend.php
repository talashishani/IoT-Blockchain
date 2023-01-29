<meta http-equiv="refresh" content="10">
<?php
print "<title> Tala Shishani </title>";

print "<h3 style='text-align:center;color:#7f725c;'>Real Time Data</h3>";
print "<table style = 'font-family: Trebuchet MS, Arial, Helvetica, ans-serif; border-collapse:collapse; width: 100%; text-align: center;'><tr style = 'background-color: #ffff4d;'>";
print"<th style = 'border: 1px solid #090902; padding: 8px; padding-top: 12px; padding-bottom: 12px; text-align: center; background-color: #ffc04d; color: white;'>Humidity & Temp</th><th style = 'border: 1px solid #090902; padding: 8px; padding-top: 12px; padding-bottom: 12px; text-align: center; background-color: #ffc04d; color: white;'>Pulse</th><th style = 'border: 1px solid #090902; padding: 8px; padding-top: 12px; padding-bottom: 12px; text-align: center; background-color: #ffc04d; color: white;'>Tracking</th><th style = 'border: 1px solid #090902; padding: 8px; padding-top: 12px; padding-bottom: 12px; text-align: center; background-color: #ffc04d; color: white;'>Ambient Light</th><th style = 'border: 1px solid #090902; padding: 8px; padding-top: 12px; padding-bottom: 12px; text-align: center; background-color: #ffc04d; color: white;'>Ultrasonic Sensor</th>";
$temp = fopen("data.txt", "r");
while (!feof($temp)){
    $data = fgets($temp);
    list($humtemp, $pulse, $tracking, $ldr, $ultrasonic) = explode("|", $data);
    print"<tr><td style = 'border: 1px solid #090902;text-align:center; '> $humtemp </td><td style = 'border: 1px solid #090902;text-align:center ;font-family: Trebuchet MS, Arial, Helvetica, ans-serif; border-collapse:collapse; font-family: Trebuchet MS, Arial, Helvetica, ans-serif; border-collapse:collapse;  '>  $pulse </td><td style = 'font-family: Trebuchet MS, Arial, Helvetica, ans-serif; border-collapse:collapse;border: 1px solid #090902;text-align:center;'> $tracking </td><td style = 'border: 1px solid #090902;text-align:center;font-family: Trebuchet MS, Arial, Helvetica, ans-serif; border-collapse:collapse; '> $ldr </td><td style ='border: 1px solid #090902;text-align:center; font-family: Trebuchet MS, Arial, Helvetica, ans-serif; border-collapse:collapse;'> $ultrasonic </td></tr>";
}
print "</tr></table>";  
?>
