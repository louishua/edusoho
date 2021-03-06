<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20141202141658 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
    	$this->addSql("
    		ALTER table `user`   
			Add column `consecutivePasswordErrorTimes` int not null default 0 AFTER `locked`;	
    	");

    	$this->addSql("	
			ALTER table `user` 
			Add column `lockDeadline` int(10) not null default 0 AFTER `locked`;
    	");
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
    }
}
