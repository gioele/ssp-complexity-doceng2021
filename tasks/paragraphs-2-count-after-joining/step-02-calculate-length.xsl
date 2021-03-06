<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
    <xsl:output omit-xml-declaration="yes"/>

    <xsl:import href="../common/identity.xsl"/>

    <xsl:template match="w">
        <xsl:copy>
            <xsl:attribute name="length">
                <xsl:value-of select="string-length(.)"/>
            </xsl:attribute>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template>
</xsl:stylesheet>
