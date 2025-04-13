<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class DetailProject extends Component
{
    /**
     * Create a new component instance.
     */

    public string $title;
    public string $url;
    public array $images;
    public array $techs;
    public string $description;


    public function __construct(
        string $title,
        string $url,
        array $images,
        array $techs,
        string $description
    ) {
        $this->title = $title;
        $this->url = $url;
        $this->images = $images;
        $this->techs = $techs;
        $this->description = $description;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.detail-project');
    }
}
