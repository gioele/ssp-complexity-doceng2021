<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
    <xsl:output omit-xml-declaration="yes"/>

    <xsl:import href="../common/identity.xsl"/>

    <xsl:template match="expense/@currency">
        <xsl:attribute name="currency">
            <xsl:value-of select="upper-case(.)"/>            
        </xsl:attribute>
    </xsl:template>
</xsl:stylesheet>
