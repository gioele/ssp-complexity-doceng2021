<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
  <xsl:output omit-xml-declaration="yes" method="xml"/>
  <xsl:import href="../common/identity.xsl"/>

  <xsl:template match="//expense[number(@value-in-eur) lt 100]"/>
</xsl:stylesheet>
