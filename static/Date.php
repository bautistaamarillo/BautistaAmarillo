<?php
class Date_F{
    public static function getFecha(){
        $year = date ('Y');
        $month = date ('m');
        $day = date ('d');
        return $day."/".$month."/".$year;
    }

}

echo Date_F::getFecha();

?>