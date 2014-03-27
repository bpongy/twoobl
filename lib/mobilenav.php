
<?php

// TODO

if( !function_exists( 'twoobl_mobilenav' ) ) {
	function twoobl_mobilenav() {
		$mobnav = '<input type="checkbox" id="check-navmob"><div id="navmob"><nav><ul class="nav"><li>
				<a href="http://thiviers-pneus.eurotyre.fr">
					<span>Home</span>
				</a>
				
			</li><li class="dropdown">
				<a class="dropdown-toggle" data-toggle="dropdown" href="#">
					<span>Pneus <b class="caret"></b></span>
				</a>
				<ul class="dropdown-menu"><li class="mot_25">
				<a href="spip.php?page=services&id_mot=25&id=9875">
					<span>2 Roues</span>
				</a>
				
			</li><li class="mot_26">
				<a href="spip.php?page=services&id_mot=26&id=9875">
					<span>Auto</span>
				</a>
				
			</li><li class="mot_27">
				<a href="spip.php?page=services&id_mot=27&id=9875">
					<span>4X4</span>
				</a>
				
			</li><li class="mot_28">
				<a href="spip.php?page=services&id_mot=28&id=9875">
					<span>Utilitaire</span>
				</a>
				
			</li><li class="mot_29">
				<a href="spip.php?page=services&id_mot=29&id=9875">
					<span>Camping Car</span>
				</a>
				
			</li></ul>
			</li><li class="dropdown">
				<a class="dropdown-toggle" data-toggle="dropdown" href="#">
					<span>Entretien auto <b class="caret"></b></span>
				</a>
				<ul class="dropdown-menu"><li class="mot_30">
				<a href="spip.php?page=services&id_mot=30&id=9875">
					<span>Boutique libre service</span>
				</a>
				
			</li><li class="mot_34">
				<a href="spip.php?page=services&id_mot=34&id=9875">
					<span>Freinage</span>
				</a>
				
			</li><li class="mot_35">
				<a href="spip.php?page=services&id_mot=35&id=9875">
					<span>Amortisseurs</span>
				</a>
				
			</li><li class="mot_36">
				<a href="spip.php?page=services&id_mot=36&id=9875">
					<span>Vidange</span>
				</a>
				
			</li><li class="mot_37">
				<a href="spip.php?page=services&id_mot=37&id=9875">
					<span>Diagnostic électronique</span>
				</a>
				
			</li><li class="mot_38">
				<a href="spip.php?page=services&id_mot=38&id=9875">
					<span>Echappement</span>
				</a>
				
			</li><li class="mot_39">
				<a href="spip.php?page=services&id_mot=39&id=9875">
					<span>Climatisation</span>
				</a>
				
			</li><li class="mot_44">
				<a href="spip.php?page=services&id_mot=44&id=9875">
					<span>Essuies glaces</span>
				</a>
				
			</li><li class="mot_45">
				<a href="spip.php?page=services&id_mot=45&id=9875">
					<span>Immatriculations</span>
				</a>
				
			</li><li class="mot_46">
				<a href="spip.php?page=services&id_mot=46&id=9875">
					<span>Géométrie</span>
				</a>
				
			</li><li class="mot_47">
				<a href="spip.php?page=services&id_mot=47&id=9875">
					<span>Batterie</span>
				</a>
				
			</li><li class="mot_57">
				<a href="spip.php?page=services&id_mot=57&id=9875">
					<span>Montage / Equilibrage</span>
				</a>
				
			</li></ul>
			</li><li>
				<a href="spip.php?page=mobilite&id=9875">
					<span>Service mobilité</span>
				</a>
				
			</li><li class="dropdown">
				<a class="dropdown-toggle" data-toggle="dropdown" href="#">
					<span>Services pro <b class="caret"></b></span>
				</a>
				<ul class="dropdown-menu"><li class="mot_20">
				<a href="spip.php?page=services&id_mot=20&id=9875">
					<span>Agricole</span>
				</a>
				
			</li><li class="mot_23">
				<a href="spip.php?page=services&id_mot=23&id=9875">
					<span>Manutention</span>
				</a>
				
			</li><li class="mot_24">
				<a href="spip.php?page=services&id_mot=24&id=9875">
					<span>Génie Civil</span>
				</a>
				
			</li></ul>
			</li><li>
				<a href="spip.php?page=promotions&id=9875">
					<span>Promotions</span>
				</a>
				
			</li><li>
				<a href="spip.php?page=acces&id=9875">
					<span>Accès & contact</span>
				</a>
				
			</li></ul></nav>';
		
		$mobnav .= '</div>';
		
		return $mobnav;
	}
}
