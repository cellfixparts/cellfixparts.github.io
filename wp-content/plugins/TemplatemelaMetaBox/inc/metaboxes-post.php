<?php
/***********************************************************/
// Post options
/***********************************************************/
$prefix = 'tmpmela_posts_';
$TM_META_BOXES[] = array(
	'id'		=> 'tmpmela_short_description',
	'title' 	=> esc_html__('TM - Short Description', 'megashop-multistore'),
	'pages' 	=> array( 'post' ),
	'context' 	=> 'side',
	'priority' 	=> 'low',
	'local_images' => true,
	'fields' 	=> array(
		// Show short description on post page
		array(
			'name'    		=> esc_html__('', 'megashop-multistore'),
			'id'      		=> "{$prefix}short_description",
			'type'    		=> 'textarea',
			'std'			=> '',
		),
	),
);
$prefix = 'tmpmela_posts_';
$TM_META_BOXES[] = array(
	'id'		=> 'tmpmela_posts_options',
	'title' 	=> esc_html__('TM - Post Options', 'megashop-multistore'),
	'pages' 	=> array( 'post' ),
	'context' 	=> 'side',
	'priority' 	=> 'low',
	'local_images' => true,
	'fields' 	=> array(
		// Show related posts on post page
		array(
			'name'    		=> esc_html__('Show Related Posts on single post:', 'megashop-multistore'),
			'id'      		=> "{$prefix}show_related_posts",
			'type'    		=> 'checkbox',
			'std'			=> 1,
		),		
		// Show Author Info on post page
		array(
			'name'    		=> esc_html__('Show Author Info on single post:', 'megashop-multistore'),
			'id'      		=> "{$prefix}show_author_info",
			'type'    		=> 'checkbox',
			'std'			=> 1,
		),	
	),
);
$prefix = 'tmpmela_blog_list_';
$TM_META_BOXES[] = array(
	'id'		=> 'tmpmela_blog_list_columns',
	'title' 	=> esc_html__('TM - List Options', 'megashop-multistore'),
	'pages' 	=> array( 'page' ),
	'context' 	=> 'side',
	'priority' 	=> 'low',
	'local_images' => true,
	'fields' 	=> array(	
		// Show number of posts per page
		array(
			'name'			=> esc_html__('Number of posts per page:', 'megashop-multistore'),
			'id'    		=> "{$prefix}posts_per_page",
			'type'  		=> 'text',
			'std'   		=> '5',
		),
	),
	'display_on'	=> array( 'template' => array(
		'page-templates/blog-list.php',
	) ),
);
$prefix = 'tmpmela_blog_box_';
$TM_META_BOXES[] = array(
	'id'		=> 'tmpmela_blog_box_columns',
	'title' 	=> esc_html__('TM - Box Options', 'megashop-multistore'),
	'pages' 	=> array( 'page' ),
	'context' 	=> 'side',
	'priority' 	=> 'low',
	'local_images' => true,
	'fields' 	=> array(	
		// Show grid or masorny 
		array(
			'name'    		=> esc_html__('Display Options:', 'megashop-multistore'),
			'id'      		=> "{$prefix}display",
			'type'    		=> 'radio',
			'std'			=> 'grid',
			'options'		=> array(
				'grid'		=> 'Grid',
				'masonry'	=> 'Masonry',
			)
		),
		// Show posts per column
		array(
			'name'    		=> esc_html__('Columns Options:', 'megashop-multistore'),
			'id'      		=> "{$prefix}columns",
			'type'    		=> 'radio',
			'std'			=> 'two',
			'options'		=> array(
				'two'		=> 'Two',
				'three'		=> 'Three',
				'four'		=> 'Four', 
			)
		),
		// Show number of posts per page
		array(
			'name'			=> esc_html__('Number of posts per page:', 'megashop-multistore'),
			'id'    		=> "{$prefix}posts_per_page",
			'type'  		=> 'text',
			'std'   		=> '5',
		),
	),
	'display_on'	=> array( 'template' => array(
		'page-templates/blog-box.php'
	) ),
);
$prefix = 'tmpmela_blog_filter_';
$TM_META_BOXES[] = array(
	'id'		=> 'tmpmela_blog_filter_columns',
	'title' 	=> esc_html__('TM - Filter Options', 'megashop-multistore'),
	'pages' 	=> array( 'page' ),
	'context' 	=> 'side',
	'priority' 	=> 'low',
	'local_images' => true,
	'fields' 	=> array(	
		// Show posts per column
		array(
			'name'    		=> esc_html__('Columns Options:', 'megashop-multistore'),
			'id'      		=> "{$prefix}columns",
			'type'    		=> 'radio',
			'std'			=> 'two',
			'options'		=> array(
				'two'		=> 'Two',
				'three'		=> 'Three',
				'four'		=> 'Four', 
			)
		),
	),
	'display_on'	=> array( 'template' => array(
		'page-templates/blog-filter.php'
	) ),
);
?>