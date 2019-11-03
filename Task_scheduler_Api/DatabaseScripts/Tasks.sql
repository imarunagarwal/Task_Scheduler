CREATE TABLE [dbo].[Tasks] (
    [Id]				INT             IDENTITY (1, 1) NOT NULL,
    [UserId]			INT             NOT NULL,
    [Description]       NVARCHAR (500)   NOT NULL,
    [Date]				DATETIME NOT NULL,
    CONSTRAINT [PK_Tasks] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Tasks_Users_UserId] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([Id])
);