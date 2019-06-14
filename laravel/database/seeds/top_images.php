<?php

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class top_images extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = array(
                        array(
                            'pagename' => 'contact', 
                            'position' => 'top',
                            'image' => 'public/8Ct7CnSMyEYa4VpHdDSsSAIgJU4zsnfZ4eeGg9Db.png'
                        ),
                        array(
                            'pagename' => 'aboutus',
                            'position' => 'top',
                            'image' => 'public/IUwRMmtAzyYjGzkmZXlrRq1IhDOKCY7B4NjBkrVt.png'
                        ),
                        array(
                            'pagename' => 'home', 
                            'position' => 'top',
                            'image' => 'public/ZNtX1faQzK6sH8o1yw7JcgatwEks7FCzXS0X8UIq.png'
                        ),
                        array(
                            'pagename' => 'logo',
                            'position' => 'top',
                            'image' => 'public/vgbOJKt3JxEJ9RQItqMxoM70nmpbPAdVtfbgPhFX.png'
                        ),
                        array(
                            'pagename' => 'ourVision', 
                            'position' => 'top',
                            'image' => 'public/3mCWGtJLBFYoncMdPkmwWWAcoht67hRcv1N82OAO.png'
                        ),
                        array(
                            'pagename' => 'ourAim',
                            'position' => 'top',
                            'image' => 'public/vukyWmiH8OUhFKX7rD9jY1nDkrmmFc7Sbmx49qXI.png'
                        ),
                        array(
                            'pagename' => 'Whatweoffer', 
                            'position' => 'top',
                            'image' => 'public/9iMlE9KX8eJGzpIpu2LtnK1Gq5eLAZ1Ij3YQXF9S.png'
                        ),
                        array(
                            'pagename' => 'OurPlacements',
                            'position' => 'top',
                            'image' => 'public/DUvTrzKyQrOLfHhh5kP0tIY74SYQiPBBXixNILD3.png'
                        ),
                        array(
                            'pagename' => 'services',
                            'position' => 'top',
                            'image' => 'public/IJtQ7yMhHNUcaF7cwmsMCm6w4ihKuLA2AE1RMKqP.png'
                        )
                    );
        DB::table('page_top_images')->insert($data);
    }
}
