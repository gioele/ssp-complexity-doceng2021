<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
    <xsl:output omit-xml-declaration="yes" method="text"/>
    
    <xsl:template match="/">
        <xsl:value-of select="string-join(//expense[upper-case(@currency) = 'EUR' or not(@currency)]/@id, '; ')"/>
    </xsl:template>
</xsl:stylesheet>