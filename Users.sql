CREATE TABLE [dbo].[Users] (
    [Id]            INT      IDENTITY (1, 1) NOT NULL,
    [Name]			NVARCHAR (128)   NOT NULL,
	[EmailId]		NVARCHAR (128)   NOT NULL,
	[Password]		NVARCHAR (128)   NOT NULL,
    [LastLogin]		DATETIME NULL,
    CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED ([Id] ASC)
);





