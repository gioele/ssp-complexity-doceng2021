<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
    <xsl:output omit-xml-declaration="yes" method="text"/>

    <xsl:template match="/">
        <xsl:value-of select="
            string-join(//person[@id = (
                //expense[upper-case(@currency) = 'EUR' or not(@currency)][number(@value) ge 100],
                //expense[upper-case(@currency) = 'USD'][number(@value) * 0.9 ge 100]
            )/@person]/@name , '; ')
        "/>
    </xsl:template>
</xsl:stylesheet>
